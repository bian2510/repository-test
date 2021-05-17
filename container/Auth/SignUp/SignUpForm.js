import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button, Select } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';
import { getDocumentType } from '../../Listing/SignUp/SingUpParams';
import { FaAngleDown } from 'react-icons/fa';
import UploadImage from '../UploadImage';

export default () => {
  const { signUp } = useContext(AuthContext);
  const { getValues, control, watch, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const inputPassword = getValues().password
  const confirmPasswordInput = watch('confirmPassword');
  const { Option } = Select
  const onSubmit = (data) => {
    if (inputPassword === confirmPasswordInput) {
      signUp(data);
    } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Name *"
        htmlFor="username"
        error={
          errors.username && (
            <>
              {errors.username?.type === 'required' && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="username"
          name="username"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Last name *"
        htmlFor="lastName"
        error={
          errors.lastName && (
            <>
              {errors.lastName?.type === 'required' && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="lastName"
          name="lastName"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Phone number *"
        htmlFor="phone"
        error={
          errors.phone && (
            <>
              {errors.phone?.type === 'required' && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="phone"
          name="phone"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Email *"
        htmlFor="email"
        error={
          errors.email && (
            <>
              {errors.email?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span>Please enter a valid email address!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          type="email"
          id="email"
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
        />
      </FormControl>
      <FormControl
        label="Password *"
        htmlFor="password"
        error={
          errors.password && (
            <>
              {errors.password?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span>Password must be at lest 8 characters!</span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span>Password must not be longer than 20 characters!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="password"
          name="password"
          rules={{ required: true, minLength: 8, maxLength: 20,}}
        />
      </FormControl>
      <FormControl
        label="Confirm password *"
        htmlFor="confirmPassword"
        error={ errors.confirmPassword && (
            <>
              {errors.confirmPassword?.type === 'register' && (
                <span>This field is required!</span>
              )}
              {
                confirmPasswordInput !== inputPassword
                ? errors.confirmPassword && <span>password must be equals</span>
                : ''
              }
            </>
            )           
        }        
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="confirmPassword"
          name="confirmPassword"
          rules={{ 
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Document Type"
        htmlFor="documentType"
        error={''}
      >
        <Controller
          as={<Select>
            {
              getDocumentType.options.map(item => {
                return <Option key={item.value} value={item.value}>{item.label}</Option>
              })
            }
          </Select>}
          defaultValue=''
          control={control}
          suffixIcon={<FaAngleDown className='operation-marker'/>}
          id="documentType"
          name="documentType"
        />
      </FormControl>
      <FormControl
        label="Document number"
        htmlFor="document"
        error={''}
      >
        <Controller
          as={<Input />}
          id="document"
          name="document"
          defaultValue=""
          control={control}
        />
      </FormControl>
      <FormControl
        label="Upload your photo"
        htmlFor="photo"
        error={''}
      >
        <Controller
          as={<UploadImage />}
          id="photo"
          name="photo"
          defaultValue=""
          control={control}
        />
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="termsAndConditions"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>I agree with terms and conditions</Label>
        </SwitchWrapper>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
      >
        <MdLockOpen />
        Register
      </Button>
    </form>
  );
};
