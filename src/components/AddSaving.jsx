import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SavingMethod from "./SavingMethod";
import { Button } from "./ui/button";
import { Bars } from 'react-loading-icons';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { toast, useToast } from "../components/ui/use-toast";
import { useAtom } from "jotai";
import { currentUserAtom } from "@/lib/atoms";
import { createSaving } from "@/services/getApi";

const formSchema = z.object({
  purpose: z.string().min(2, {
    message: "Masukkan dulu tujuan kamu menabung.",
  }),
  startDate: z.string({
    required_error: "Tanggal Mulai Nabung is required",
  }),
  endDate: z.string({
    required_error: "Tanggal Selesai Nabung is required",
  }),
  totalAmount: z.coerce
    .number({
      required_error: "Total Harga is required",
    })
    .positive("Total Harga must be positive"),
  nominalAmount: z.coerce
    .number({
      required_error: "nominal is required",
    })
    .positive("nominal must be positive"),
  savingsMethod: z.enum(["cash", "bank"]).optional(),
});

const AddSaving = ({ onClose, onSavingAdded }) => {
  const [currentUser] = useAtom(currentUserAtom);
  const [savingMethod, setSavingMethod] = useState("daily");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purpose: "",
      startDate: null,
      endDate: null,
      totalAmount: "",
      nominalAmount: "",
      savingsMethod: "",
    },
  });

  async function onSubmit(data) {
    try {
      setLoading(true);
      const savingData = {
        category_name: data.purpose,
        date: data.startDate,
        start_date: data.startDate,
        end_date: data.endDate,
        saving_method: data.savingsMethod,
        saving_frequency: savingMethod,
        total_saving: data.totalAmount,
        nominal: data.nominalAmount,
        user_id: currentUser.id,
      };
      const response = await createSaving(savingData);
      console.log(response);
      toast({
        title: "Success!",
        description: "Successfully created your saving!",
      });
      onSavingAdded(response.saving);
      onClose();
    } catch (error) {
      console.error("Form data is invalid:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-80 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Add Saving</h2>
        <SavingMethod setSavingMethod={setSavingMethod} className="w-full mb-4" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tujuan Nabung</FormLabel>
                  <FormControl>
                    <Input placeholder="cth: beli tas" {...field} />
                  </FormControl>
                  <FormDescription>Tujuan menabung mu apa?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Mulai Nabung</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="date" />
                  </FormControl>
                  <FormDescription>Pilih tanggal mulai menabung.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Selesai Nabung</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="date" />
                  </FormControl>
                  <FormDescription>Pilih tanggal selesai menabung.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Harga yang Sedang Ditabung</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="cth: 1000000" {...field} />
                  </FormControl>
                  <FormDescription>Masukkan total harga yang sedang ditabung.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nominalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nominal yang Ditabung per waktu</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="cth: 1000000" {...field} />
                  </FormControl>
                  <FormDescription>Masukkan nominal.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="savingsMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Metode Nabung</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Pilih metode...</option>
                      <option value="cash">Cash</option>
                      <option value="bank">Bank</option>
                    </select>
                  </FormControl>
                  <FormDescription>Pilih metode penabungan (cash atau bank).</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 justify-center items-center mt-2">
              <Button
                type="submit"
                variant="custom"
                className="w-full bg-purple-500 text-white"
                disabled={loading}
              >
                {loading ? <Bars className="w-5" strokeWidth={25} /> : 'Submit'}
              </Button>
              <Button
                onClick={onClose}
                variant="custom"
                className="w-full bg-orange-500 text-white"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AddSaving;
