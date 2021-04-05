export class Validators {
  static required(value = "") {
    return value && value.trim();
  }

  static minLegth(length) {
    return (value) => {
      return value.length >= length;
    };
  }
}
