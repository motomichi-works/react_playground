import { FieldErrors } from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import TextLikeField001, {
  TextLikeFieldProps,
} from 'components/common/molecules/TextLikeField001';
import SelectField001 from 'components/common/molecules/SelectField001';
import { IFormValues } from 'containers/ReactHookFormSamples/validation-schema';
import { SelectFieldBasicProps } from 'utils/get-select-field-basic-props';

type Props = {
  errors: FieldErrors<IFormValues>;
  fieldProps: {
    firstName: TextLikeFieldProps;
    age: SelectFieldBasicProps;
  };
};

const ReactHookFormSample04: React.VFC<Props> = ({ errors, fieldProps }) => {
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
        {/* eslint-disable */}
        <TextLikeField001 {...fieldProps.firstName} />
        <p>{errors.firstName?.message}</p>
        {/* eslint-enable */}

        {/* eslint-disable */}
        <SelectField001
          {...fieldProps.age}
          choices={[
            { label: '選択してください', value: '' },
            { label: 'Selectタグ選択肢1', value: 'selectTagChoice1' },
            { label: 'Selectタグ選択肢2', value: 'selectTagChoice2' },
          ]}
        />
        <p>{errors.age?.message}</p>
        {/* eslint-enable */}

        <input type="submit" />
      </Frame001>

      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample04;
