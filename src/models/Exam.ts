export enum EXAM_CATEGORY {
  VISIT = 'VISIT',
  SPEC = 'SPEC',
  SELF_EXAM = 'SELF_EXAM',
}

export type Exam = {
  id: number;
  code: string;
  name: string;
  description: string;
  preparation: string;
  type: EXAM_CATEGORY;
};
