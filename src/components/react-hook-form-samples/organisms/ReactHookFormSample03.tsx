import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import { IFormValues } from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample03Container';

type Props = {
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

const ReactHookFormSample03: React.VFC<Props> = ({ register, errors }) => {
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
    <OrganismFrame001 sectionHeadingText="スキーマバリデーション">
      <Frame001 headingText="Demo">
        {/* eslint-disable */}
        <input {...register('firstName')} />
        {/* eslint-enable */}
        <p>{errors.firstName?.message}</p>

        {/* eslint-disable */}
        <input {...register('age')} />
        {/* eslint-enable */}
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </Frame001>

      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample03;
