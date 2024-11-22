import { Schema, model } from "mongoose";

interface IActivities{
    tittle:string;
    endDate: Date;
    description: string;
    state: "active" | "pending";
    userId: Schema.Types.ObjectId | string;

}

const ActivitySchema = new Schema<IActivities>({
    tittle:{
        type: String,
        required: true
    },
    description:{
        type :String,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    state:{
        type: String,
        enum: ["active","pending"],
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref: "users",
        required:true
    }
}
)
export const ActivityModel = model ("activities", ActivitySchema);