import { FieldErrors } from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import FieldUnit001 from 'components/common/molecules/FieldUnit001';
import FieldHeading001 from 'components/common/molecules/FieldHeading001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import MultipleFieldUnit001 from 'components/common/molecules/MultipleFieldUnit001';

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
    checkboxSample: Pick<
      CheckboxFieldProps,
      'handleBlur' | 'handleChange' | 'name' | 'ref'
    >;
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
        <FieldHeading001 text="お名前（カナ）" badgeType="required" />
        <MultipleFieldUnit001
          items={[
            {
              field: <TextLikeField001 {...fieldProps.lastNameKana} />,
              label: 'セイ',
              isVisibleErrorMessage:
                touchedFields !== undefined &&
                touchedFields.lastNameKana === true &&
                errors.lastNameKana !== undefined,
              errorMessage: errors.lastNameKana?.message,
            },
            {
              field: <TextLikeField001 {...fieldProps.firstNameKana} />,
              label: 'メイ',
              isVisibleErrorMessage:
                touchedFields !== undefined &&
                touchedFields.firstNameKana === true &&
                errors.firstNameKana !== undefined,
              errorMessage: errors.firstNameKana?.message,
            },
          ]}
          combinationItem={{
            field: <HiddenField001 {...fieldProps.fullName} />,
            isVisibleErrorMessage:
              touchedFields !== undefined &&
              touchedFields.lastNameKana === true &&
              touchedFields.firstNameKana === true &&
              errors.fullName !== undefined,
            errorMessage: errors.fullName?.message,
          }}
        />

        <FieldHeading001 text="セレクトサンプル" badgeType="required" />
        <FieldUnit001
          field={
            <SelectField001
              {...fieldProps.selectSample}
              choices={[
                { label: '選択してください', value: '' },
                { label: 'Selectタグ選択肢1', value: 'selectTagChoice1' },
                { label: 'Selectタグ選択肢2', value: 'selectTagChoice2' },
              ]}
            />
          }
          isVisibleErrorMessage={
            touchedFields !== undefined &&
            touchedFields.selectSample === true &&
            errors.selectSample !== undefined
          }
          errorMessage={errors.selectSample?.message}
        />

        <FieldHeading001 text="ラジオサンプル" badgeType="required" />
        <FieldUnit001
          field={
            <RadioField001
              {...fieldProps.radioSample}
              choices={[
                { label: '何も選択しない', value: '' },
                { label: 'Radioタグ選択肢1', value: 'radioTagChoice1' },
                { label: 'Radioタグ選択肢2', value: 'radioTagChoice2' },
              ]}
            />
          }
          isVisibleErrorMessage={
            touchedFields !== undefined &&
            touchedFields.radioSample === true &&
            errors.radioSample !== undefined
          }
          errorMessage={errors.radioSample?.message}
        />

        <FieldHeading001 text="チェックボックスサンプル" badgeType="required" />
        <FieldUnit001
          field={
            <CheckboxField001
              {...fieldProps.checkboxSample}
              value="on"
              label="チェックボックスサンプル"
            />
          }
          isVisibleErrorMessage={
            touchedFields !== undefined &&
            touchedFields.checkboxSample === true &&
            errors.checkboxSample !== undefined
          }
          errorMessage={errors.checkboxSample?.message}
        />

        <FieldHeading001 text="テキストエリアサンプル" badgeType="required" />
        <FieldUnit001
          field={<TextAreaField001 {...fieldProps.textAreaSample} />}
          isVisibleErrorMessage={
            touchedFields !== undefined &&
            touchedFields.textAreaSample === true &&
            errors.textAreaSample !== undefined
          }
          errorMessage={errors.textAreaSample?.message}
        />

        <input type="submit" />
      </Frame001>

      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample04;
