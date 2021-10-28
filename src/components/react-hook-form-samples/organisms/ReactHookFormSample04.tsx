import React from 'react';
import {
  UseFormRegister,
  FieldErrors,
  ChangeHandler,
  RefCallBack,
} from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import TextLikeField001 from 'components/common/molecules/TextLikeField001';
import { IFormValues } from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample04Container';

type Props = {
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

const ReactHookFormSample04: React.VFC<Props> = ({ register, errors }) => {
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

  type TTextLikeField = {
    type: 'text' | 'tel';
    name: string;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    ref: RefCallBack;
  };

  type TFields = {
    firstName: TTextLikeField;
    age: TTextLikeField;
  };

  const fields: TFields = {
    firstName: {
      ...register('firstName'),
      type: 'text',
    },
    age: {
      ...register('age'),
      type: 'tel',
    },
  };

  return (
    <OrganismFrame001 sectionHeadingText="自作のコンポーネントにバリデーションを適用する">
      <Frame001 headingText="Demo">
        <TextLikeField001
          type={fields.firstName.type}
          name={fields.firstName.name}
          handleBlur={({ target, type }) => {
            void fields.firstName.onBlur({ target, type });
          }}
          ref={fields.firstName.ref}
        />
        <p>{errors.firstName?.message}</p>

        <TextLikeField001
          type={fields.age.type}
          name={fields.age.name}
          handleBlur={({ target, type }) => {
            void fields.age.onBlur({ target, type });
          }}
          ref={fields.age.ref}
        />
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
