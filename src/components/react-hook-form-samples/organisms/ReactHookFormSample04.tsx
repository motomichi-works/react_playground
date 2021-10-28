import React from 'react';
import { FieldErrors } from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import TextLikeField001, {
  TextLikeFieldProps,
} from 'components/common/molecules/TextLikeField001';
import { IFormValues } from 'containers/ReactHookFormSamples/validation-schema';

type Props = {
  errors: FieldErrors<IFormValues>;
  fieldPropsObj: {
    firstName: TextLikeFieldProps;
    age: TextLikeFieldProps;
  };
};

const ReactHookFormSample04: React.VFC<Props> = ({ errors, fieldPropsObj }) => {
  const items: Items = [
    [
      {
        tagName: 'span',
        content: 'このDemoについては、公式ドキュメントの ',
      },
      {
        tagName: 'a',
        content: 'https://react-hook-form.com/get-started',
        href: 'https://react-hook-form.com/get-started',
      },
      {
        tagName: 'span',
        content: ' の「Schema Validation」の項のTSタブ内を参照しました。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="業務を想定して設計する">
      <Frame001 headingText="Demo">
        {/* eslint-disable-next-line */}
        <TextLikeField001 {...fieldPropsObj.firstName} />
        <p>{errors.firstName?.message}</p>

        {/* eslint-disable-next-line */}
        <TextLikeField001 {...fieldPropsObj.age} />
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </Frame001>

      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample04;
