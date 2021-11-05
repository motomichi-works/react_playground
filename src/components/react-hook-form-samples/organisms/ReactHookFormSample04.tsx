import { FieldErrors } from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import CheckboxField001, {
  CheckboxFieldProps,
} from 'components/common/molecules/CheckboxField001';
import HiddenField001, {
  HiddenFieldProps,
} from 'components/common/molecules/HiddenField001';
import RadioField001, {
  RadioFieldProps,
} from 'components/common/molecules/RadioField001';
import TextAreaField001, {
  TextAreaFieldProps,
} from 'components/common/molecules/TextAreaField001';
import TextLikeField001, {
  TextLikeFieldProps,
} from 'components/common/molecules/TextLikeField001';
import SelectField001, {
  SelectFieldProps,
} from 'components/common/molecules/SelectField001';
import {
  FormValues,
  FieldNameStrings,
} from 'containers/ReactHookFormSamples/validation-schema';

type Props = {
  errors: FieldErrors<FormValues>;
  touchedFields: Partial<Record<FieldNameStrings, true>>;
  fieldProps: {
    lastNameKana: TextLikeFieldProps;
    firstNameKana: TextLikeFieldProps;
    fullName: HiddenFieldProps;
    selectSample: Pick<
      SelectFieldProps,
      'handleBlur' | 'handleChange' | 'name' | 'ref'
    >;
    radioSample: Pick<
      RadioFieldProps,
      'handleBlur' | 'handleChange' | 'name' | 'ref'
    >;
    checkboxSample: Pick<CheckboxFieldProps, 'handleChange' | 'name' | 'ref'>;
    textAreaSample: TextAreaFieldProps;
  };
};

const ReactHookFormSample04: React.VFC<Props> = ({
  errors,
  fieldProps,
  touchedFields,
}) => {
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
        <TextLikeField001 {...fieldProps.lastNameKana} />
        {touchedFields?.lastNameKana && <p>{errors.lastNameKana?.message}</p>}
        {/* eslint-enable */}

        {/* eslint-disable */}
        <TextLikeField001 {...fieldProps.firstNameKana} />
        {touchedFields?.firstNameKana && <p>{errors.firstNameKana?.message}</p>}
        {/* eslint-enable */}

        {/* eslint-disable */}
        <HiddenField001 {...fieldProps.fullName} />
        {touchedFields?.lastNameKana && touchedFields?.firstNameKana && (
          <p>{errors.fullName?.message}</p>
        )}
        {touchedFields?.fullName ? 'true' : 'false'}
        {/* eslint-enable */}

        {/* eslint-disable */}
        <SelectField001
          {...fieldProps.selectSample}
          choices={[
            { label: '選択してください', value: '' },
            { label: 'Selectタグ選択肢1', value: 'selectTagChoice1' },
            { label: 'Selectタグ選択肢2', value: 'selectTagChoice2' },
          ]}
        />
        {touchedFields?.selectSample && <p>{errors.selectSample?.message}</p>}
        {/* eslint-enable */}

        {/* eslint-disable */}
        <RadioField001
          {...fieldProps.radioSample}
          choices={[
            { label: '何も選択しない', value: '' },
            { label: 'Radioタグ選択肢1', value: 'radioTagChoice1' },
            { label: 'Radioタグ選択肢2', value: 'radioTagChoice2' },
          ]}
        />
        {touchedFields?.radioSample && <p>{errors.radioSample?.message}</p>}
        {/* eslint-enable */}

        {/* eslint-disable */}
        <CheckboxField001
          {...fieldProps.checkboxSample}
          value="on"
          label="checkboxサンプル"
        />
        {touchedFields?.checkboxSample && (
          <p>{errors.checkboxSample?.message}</p>
        )}
        {/* eslint-enable */}

        {/* eslint-disable */}
        <TextAreaField001 {...fieldProps.textAreaSample} />
        {touchedFields?.textAreaSample && (
          <p>{errors.textAreaSample?.message}</p>
        )}
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
