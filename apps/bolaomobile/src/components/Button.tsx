import { Button as NativeButton, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export  function Button({ title, variant='primary', ...rest }: Props) {

  const isPrimaryBg = variant === 'secondary' ? 'red.500': 'yellow.500';
  const isPrimaryPressed = variant === 'secondary' ? 'red.400': 'yellow.600';
  const isPrimaryText = variant === 'secondary' ? 'white' : 'black'
  
  return (
    <NativeButton 
      w='full'
      h={14}
      rounded='sm'
      fontSize='md'
      textTransform='uppercase'
      bg={isPrimaryBg}
      _pressed={{bg: isPrimaryPressed}}
      _loading={{_spinner: {color: 'black'}}}

      {...rest}
    >
      <Text
        fontSize='sm'
        fontFamily='heading'
        color={isPrimaryText}
      >
        {title}
      </Text>
    </NativeButton>
  )
}