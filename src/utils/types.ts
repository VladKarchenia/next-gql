export type PlumComponentProps<T extends React.ElementType> = React.ComponentProps<T> & {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

type Modify<T, R> = Omit<T, keyof R> & R;

export type PlumFormComponentProps<T extends React.ElementType, R> = Omit<
  Modify<PlumComponentProps<T>, R>,
  "ref" | "hasError" | "prefix"
>;

export type ResponsiveProp<T extends any> = {
  "@initial"?: T;
  "@xxs"?: T;
  "@xs"?: T;
  "@sm"?: T;
  "@md"?: T;
  "@lg"?: T;
  "@xl"?: T;
  "@xxl"?: T;
};
