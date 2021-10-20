export class Regex {
    stringNumber: RegExp = /[\w\s]$/;
    blockSpecial: RegExp = /^[\d-/.]$/;
    stringPag: RegExp = /^[\d-/.]$/;
    numberVinco: RegExp = /^[\d-/+]$/;
    string: RegExp = /[A-Za-z\s]/;
    horario: RegExp = /^[0-9/:]$/;
    cnpjCpf: RegExp = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
  }
  