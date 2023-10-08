import Categories from "../Category";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z.string().min(3,{message:'Description must contain at least 3 character(s)'}),
	amount: z.number({invalid_type_error:'Amount is required'}).min(10,{message:'Amount must be atleast 10'}),
	category: z.enum(Categories,{errorMap:()=>({message:'Category is required'})}),
});
export type ExpenseFormData = z.infer<typeof schema>;

type Props = {
    onSubmit:(data:ExpenseFormData)=>void
}

const ExpenseForm = ({onSubmit}:Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isValid },
    } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
	return (
		<form onSubmit={handleSubmit((data)=> {
            onSubmit(data)
            reset()
        }
            )}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					type="text"
					id="description"
					className="form-control"
				/>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount",{valueAsNumber:true})}
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<select id="" className="form-select" {...register("category")}>
					<option value="">---</option>
					{Categories.map(category => (
						<option value={category} key={category}>
							{category}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger">{errors.category.message}</p>
				)}
			</div>
			<div className="mb-3">
				<button disabled={!isValid} className="btn btn-primary">Submit</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
