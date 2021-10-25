import React from 'react';
import { Path, UseFormRegister, FieldErrors } from 'react-hook-form';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';
import { IFormValues } from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample02Container';

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => {
  const { name, onBlur, onChange, ref } = { ...register(label, { required }) };

  return (
    <div>
      <span>{label}</span>
      <input
        name={name}
        onBlur={({ target, type }) => {
          void onBlur({ target, type });
        }}
        onChange={({ target, type }) => {
          void onChange({ target, type });
        }}
        ref={ref}
      />
    </div>
  );
};

// you can use React.forwardRef to pass the ref too
const Input2 = React.forwardRef<
  HTMLInputElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <div>
    <span>{label}</span>
    <input
      name={name}
      onBlur={({ target, type }) => {
        void onBlur({ target, type });
      }}
      onChange={({ target, type }) => {
        void onChange({ target, type });
      }}
      ref={ref}
    />
  </div>
));

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <div>
    <span>{label}</span>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="">選択してください</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
));

type Props = {
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
};

const ReactHookFormSample02: React.VFC<Props> = ({ register, errors }) => {
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
        content:
          ' の「Integrating an existing form」の項のTSタブ内を参照しました。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="既存のフォームに適用する">
      <Frame001 headingText="Demo">
        <Input label="First Name" register={register} required />
        <div>{errors['First Name'] && <span>名を入力してください。</span>}</div>

        {/* eslint-disable */}
        <Input2
          label="Last Name"
          {...register('Last Name', {
            required: true,
            maxLength: 6,
            minLength: 2,
          })}
        />
        <div>
          {errors['Last Name']?.type === 'required' && (
            <span>姓を入力してください。</span>
          )}
          {errors['Last Name']?.type === 'minLength' && (
            <span>2文字以上入力してください。</span>
          )}
          {errors['Last Name']?.type === 'maxLength' && (
            <span>6文字以内で入力してください。</span>
          )}
        </div>
        {/* eslint-enable */}

        {/* eslint-disable */}
        <Select label="Age" {...register('Age', { required: true })} />
        <div>{errors.Age && <span>Ageを入力してください。</span>}</div>
        {/* eslint-enable */}

        <input type="submit" />
      </Frame001>

      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample02;
