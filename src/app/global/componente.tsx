import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormLabel, FormControl, FormField, FormMessage, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export function FormComponent(props: Props) {

    const formSchema = z.object({
        name: z.string().min(3, "O campo ter mais que três caracteres."),
        surname: z.string().min(4, ""),
        age: z.string().min(1, ""),
    });

    const router = useRouter();

    type FormDataSchema = z.infer<typeof formSchema>;

    const form = useForm<FormDataSchema>({
        resolver: zodResolver(formSchema), 
        defaultValues: {
            age: "",
            name: "",
            surname: "",
        }
    });

    const onSubmit = (values: FormDataSchema) => {
        if ( values.name !== "Gustavo") {
            setTimeout(() => {
                router.push('/dopsajda')
            }, 2000);
        } else {
            return
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Formulário</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField name='name' control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input
                                    type='text'
                                    {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}