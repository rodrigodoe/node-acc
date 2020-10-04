import { BadRequestError } from "../errors/bad-request-error";
import { PhoneDoc } from "../interfaces/phone";

class PhoneService {
  static findOne = (number: string): PhoneDoc => {
    if (isNaN(parseInt(number))) {
      throw new BadRequestError("APENAS NUMEROS SAO VALIDOS");
    }

    const phone = PhoneService.findOne(number);

    return phone;
  };
}

export { PhoneService };
