type FrontMatter = {
  id: string;
  title: string;
  subTitle: string;
  firstPublishedOn: string;
  lastEditedOn: string;
  tags: string[];
  location: string;
};

type WithChildren<T = {}> = T & { children?: React.ReactNode };
