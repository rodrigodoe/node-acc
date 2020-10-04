import { NotFoundError } from "../errors/not-found-error";
import { PhoneDoc } from "../interfaces/phone";
import { Phone } from "../models/phone";

class PhoneRepository {
  static findOne = async (key: string): Promise<PhoneDoc> => {
    const phone = await Phone.findOne({ key });
    if (!phone) {
      throw new NotFoundError();
    }
    return phone;
  };
}

export { PhoneRepository };
