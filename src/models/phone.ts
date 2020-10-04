import mongoose from "mongoose";
import { phoneAttrs, PhoneDoc, PhoneModel } from "../interfaces/phone";

const phoneSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      requied: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
      },
    },
  }
);

phoneSchema.statics.build = (attrs: phoneAttrs) => {
  return new Phone(attrs);
};

const Phone = mongoose.model<PhoneDoc, PhoneModel>("Phone", phoneSchema);

export { Phone };
