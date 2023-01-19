import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()

  const user = useState<User | null>(() => null)

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user
        console.log(user)
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false
    }
    return false
  }

  const authUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await signInWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user
        console.log(user)
        return true
      }

    } catch (error: unknown) { 
      if (error instanceof Error) {
        // handle error
        return false
      }
      return false
    }
    return false
  }

  const signOutUser = async () => {
    const result = await $auth.signOut();
    return result;
  };

  return {
    user,
    registerUser,
    authUser,
    signOutUser
  }
}