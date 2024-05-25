import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "./DatePicker";
import SavingMethod from "./SavingMethod";
import { Button } from "./ui/button";
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
import { toast } from "../components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  purpose: z.string().min(2, {
    message: "Masukkan dulu tujuan kamu menabung.",
  }),
  startDate: z.date({
    required_error: "Tanggal Mulai Nabung is required",
  }),
  endDate: z.date({
    required_error: "Tanggal Selesai Nabung is required",
  }),
  totalAmount: z
    .number({
      required_error: "Total Harga is required",
    })
    .positive("Total Harga must be positive"),
  savingsMethod: z.enum(["cash", "bank"]).optional(),
  // Add more fields as needed
});

const AddSaving = ({ onClose }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purpose: "",
      startDate: null,
      endDate: null,
      totalAmount: "",
      savingsMethod: "",
      // Add default values for other fields if necessary
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className='fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-80'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg'>
        <h2 className='text-2xl font-bold mb-4'>Add Saving</h2>
        <SavingMethod className='w-full mb-4' />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='purpose'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tujuan Nabung</FormLabel>
                  <FormControl>
                    <Input placeholder='cth: beli tas' {...field} />
                  </FormControl>
                  <FormDescription>Tujuan menabung mu apa?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Mulai Nabung</FormLabel>
                  <FormControl>
                    <DatePicker {...field} />
                  </FormControl>
                  <FormDescription>
                    Pilih tanggal mulai menabung.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='endDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Selesai Nabung</FormLabel>
                  <FormControl>
                    <DatePicker {...field} />
                  </FormControl>
                  <FormDescription>
                    Pilih tanggal selesai menabung.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='totalAmount'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Harga yang Sedang Ditabung</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='cth: 1000000'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan total harga yang sedang ditabung.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='savingsMethod'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Metode Nabung</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className='block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    >
                      <option value=''>Pilih metode...</option>
                      <option value='cash'>Cash</option>
                      <option value='bank'>Bank</option>
                    </select>
                  </FormControl>
                  <FormDescription>
                    Pilih metode penabungan (cash atau bank).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="flex gap-2 justify-center items-center mt-2">
          <Button type='submit' variant="custom" className='w-full bg-purple-500 text-white'>
          Submit
        </Button>

        <Button onClick={onClose} variant="custom" className=' w-full bg-orange-500 text-white'>
          Cancel
        </Button>
        </div>
        
      </div>
    </section>
  );
};

export default AddSaving;
