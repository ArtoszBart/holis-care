export type CreateParamList<
  Routes extends Record<string, string>,
  WithParams extends Partial<Record<Routes[keyof Routes], object>> = Partial<
    Record<Routes[keyof Routes], never>
  >,
> = {
  [K in Routes[keyof Routes]]: K extends keyof WithParams
    ? WithParams[K]
    : undefined;
};
