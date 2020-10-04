import mongoose from "mongoose";

export interface phoneAttrs {
  key: string;
  value: string;
}

export interface PhoneDoc extends mongoose.Document {
  key: string;
  value: string;
}

export interface PhoneModel extends mongoose.Model<PhoneDoc> {
  build(attrs: phoneAttrs): PhoneDoc;
}
