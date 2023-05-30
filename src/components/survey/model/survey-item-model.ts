export interface ISurveyItem {
  defaultValue: null | string | number;
  isRequired?: boolean;
  name: string;
  options?: any[] | any;
  text: string;
  type: string;
  validations: any[];
}
