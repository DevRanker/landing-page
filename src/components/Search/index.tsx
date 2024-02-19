import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

// --- Motion Components ---
const MotionBox = dynamic(() => import('@components/Motion/MotionBox'));

// --- Form and Validations ---
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Icons ---
import { FiGithub, FiSearch } from 'react-icons/fi';

// --- Validation Schema and Type ---
const validationSchema = Yup.object().shape({
	login: Yup.string().required('Login is required!'),
});

type FormType = Yup.InferType<typeof validationSchema>;

// --- Component Props Interface ---
interface ISearchProps {
	handleSearchLogin: (login?: string) => void;
}

export default function SearchComponent({
	handleSearchLogin,
}: ISearchProps): JSX.Element {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const onSubmit = ({ login }: FormType) =>
		new Promise(() => setTimeout(() => handleSearchLogin(login), 500));

	return (
		<MotionBox className="sm:w-full">
			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack
					spacing="2"
					w="full"
					alignItems="flex-start"
					className="flex flex-col items-center sm:flex-row gap-4"
					style={{
						flexDirection: 'column',
						gap: '1.5rem',
						alignItems: 'center',
					}}
					py="2"
				>
					<FormControl isInvalid={!!errors.login}>
						{/* <div className="flex flex-col items-center"> */}
						<InputGroup size="lg" variant="outline" borderColor="gray.600">
							<InputLeftElement
								pointerEvents="none"
								children={<FiGithub size="1.5rem" color="white" />}
							/>
							<Input
								{...register('login')}
								type="text"
								placeholder="Search GitHub Profile..."
								color="whitesmoke"
								bg="gray.600"
								borderColor="gray.600"
								borderRadius="xl"
								focusBorderColor="purple.500"
								_placeholder={{ color: 'gray.400' }}
								_hover={{ borderColor: 'purple.300' }}
								className="max-w-full"
							/>
							{/* <div className="flex items-center gap-2 bg-gray-600 border-gray-600 focus:border-purple-500 focus:ring-0 rounded-xl text-whitesmoke placeholder-gray-400 hover:border-purple-300 transition-all duration-300 p-3 w-full h-12 text-lg focus:outline-none">
						<FiGithub />
						<input
							type="text"
							placeholder="Search GitHub Profile..."
							className="w-full bg-transparent placeholder-gray-400 text-whitesmoke focus:outline-none"
							{...register('login')}
						/>
					</div>
					{!errors.login ? (
						<FormHelperText className="text-center">
							Insert a valid GitHub Profile to get the data
						</FormHelperText>
					) : (
						<FormErrorMessage>{errors.login?.message as string}</FormErrorMessage>
					)} */}
							{/* </div> */}
						</InputGroup>
						{!errors.login ? (
							<FormHelperText className="text-center">
								Insert a valid GitHub Profile to get the data
							</FormHelperText>
						) : (
							<FormErrorMessage>{errors.login?.message as string}</FormErrorMessage>
						)}
					</FormControl>

					<IconButton
						icon={<FiSearch />}
						type="submit"
						aria-label="Search"
						isLoading={isSubmitting}
						size="lg"
						borderRadius="xl"
						colorScheme="purple"
						className="text-white sm:w-4/12 w-full text-center"
					/>
				</HStack>
			</form>
		</MotionBox>
	);
}
