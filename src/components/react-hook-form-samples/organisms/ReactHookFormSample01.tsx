import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  exampleField: {
    registerReturn: UseFormRegisterReturn;
    errors: FieldError | undefined;
  };
  exampleRequiredField: {
    registerReturn: UseFormRegisterReturn;
    errors: FieldError | undefined;
  };
};

const ReactHookFormSample01: React.VFC<Props> = ({
  exampleField,
  exampleRequiredField,
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
        content: ' の一番上の「Example」の項のTSタブ内を参照しました。',
      },
    ],
    [
      {
        tagName: 'span',
        content: 'react-hook-formの型については ',
      },
      {
        tagName: 'a',
        content: 'https://react-hook-form.com/jp/ts',
        href: 'https://react-hook-form.com/jp/ts',
      },
      {
        tagName: 'span',
        content: ' を参照してください。',
      },
    ],
    [
      {
        tagName: 'span',
        content: 'TSで書く場合のGet Startedについては ',
      },
      {
        tagName: 'a',
        content: 'https://react-hook-form.com/get-started',
        href: 'https://react-hook-form.com/get-started',
      },
      {
        tagName: 'span',
        content: '（ JP: ',
      },
      {
        tagName: 'a',
        content: 'https://react-hook-form.com/jp/get-started/',
        href: 'https://react-hook-form.com/jp/get-started/',
      },
      {
        tagName: 'span',
        content: ' )',
      },
      {
        tagName: 'span',
        content: ' の各コードのTSタブを参照してください。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'このサンプルにおいて、errorsの型は以下のようなObjectです。',
      },
      {
        tagName: 'pre',
        content: `
          {
            example?: FieldError | undefined;
            exampleRequired?: FieldError | undefined;
          }
        `,
      },
    ],
    [
      {
        tagName: 'span',
        content: 'このサンプルにおいて',
      },
      {
        tagName: 'code',
        content: "register('example')",
      },
      {
        tagName: 'span',
        content: 'がreturnするObjectの型は、',
      },
      {
        tagName: 'code',
        content: 'UseFormRegisterReturn',
      },
      {
        tagName: 'span',
        content:
          '型で、具体的には以下のようなキーを持つObjectのようです。onBlurもChangeHandler型です。',
      },
      {
        tagName: 'pre',
        content: `
          {
            onChange: ChangeHandler;
            onBlur: ChangeHandler;
            ref: RefCallBack;
            name: string;
          }
        `,
      },
    ],
    [
      {
        tagName: 'span',
        content:
          'register関数を子コンポーネントに渡したい場合は、propsの型として',
      },
      {
        tagName: 'code',
        content: 'UseFormRegister<IFormValues>',
      },
      {
        tagName: 'span',
        content: 'を使用して、例えば以下のように書きます。',
      },
      {
        tagName: 'pre',
        content: `
          interface IFormValues {
            "First Name": string;
            Age: number;
          }

          type InputProps = {
            label: Path<IFormValues>;
            register: UseFormRegister<IFormValues>;
            required: boolean;
          };
        `,
      },
      {
        tagName: 'span',
        content: 'この型については、公式ドキュメントの ',
      },
      {
        tagName: 'a',
        content: 'https://react-hook-form.com/get-started',
        href: 'https://react-hook-form.com/get-started',
      },
      {
        tagName: 'span',
        content:
          ' の「Integrating an existing form」の項のTSタブ内を参照しました。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'formStateはerrorsを含めて以下のキーを持っています。',
      },
      {
        tagName: 'pre',
        content: `
          {
            dirtyFields: Object
            errors: Object
            isDirty: false
            isSubmitSuccessful: false
            isSubmitted: false
            isSubmitting: false
            isValid: false
            isValidating: false
            submitCount: 0
            touchedFields: Object
          }
        `,
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'サンプルコードは src/containers/ReactHookFormSamples/organisms/ReactHookFormSample01Container.tsx と、その子コンポーネントを参照してください。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="基本的な使用法">
      <Frame001 headingText="Demo">
        <div>
          {/* register your input into the hook by invoking the "register" function */}
          {/* eslint-disable-next-line */}
          <input defaultValue="test" {...exampleField.registerReturn} />
        </div>

        <div>
          {/* include validation with required or other standard HTML validation rules */}
          {/* eslint-disable-next-line */}
          <input {...exampleRequiredField.registerReturn} />
          {/* errors will return when field validation fails  */}
          {exampleRequiredField.errors && <span>This field is required</span>}
        </div>

        <div>
          <input type="submit" />
        </div>
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample01;
