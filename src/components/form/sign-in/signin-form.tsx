'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LogIn } from 'lucide-react';
import Image from 'next/image';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignInFormSchema } from '@/types/signin-form-types';

import type { JSX } from 'react';
import type { z } from 'zod';

const SignInForm = (): JSX.Element => {
  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof SignInFormSchema>> = async formData => {
    console.log(formData);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex-col items-center justify-center ">
        <Image src="/Arvasit-Logo.webp" alt="HRM" width={150} height={200} />
        <CardTitle className="text-center text-2xl ">HRMS</CardTitle>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pl-10 w-full">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grow w-80">
                    <FormLabel className="text-xl text-[#49506d]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grow w-80 ">
              <div className="flex justify-between items-center">
                <FormLabel className="pb-2 text-xl text-[#49506d]">Password</FormLabel>
                <Button variant="link" type="button" className="text-sm p-0 h-auto">
                  Forgot Password?
                </Button>
              </div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel className="text-xl text-[#49506d]">Password</FormLabel> */}

                    <FormControl>
                      <Input className="" type="password" placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Button type="submit" className="w-80">
                Sign in
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex items-center w-full gap-4">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <Button
            variant="link"
            className="flex items-center gap-2 text-gray-700 text-md hover:underline"
          >
            <LogIn /> Sign in with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
