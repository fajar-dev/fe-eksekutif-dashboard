<template>
    <main class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="flex items-center gap-3 mb-6">
                <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-primary-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" aria-hidden="true">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                </div>
                <div>
                    <div class="text-sm font-semibold">Media Antar Nusa</div>
                    <div class="text-[10px] uppercase tracking-wider text-gray-400">Executive Dashboard</div>
                </div>
            </div>
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                        <div class="mb-6">
                            <h1 class="text-lg font-semibold text-gray-900 md:text-lg">
                                Sign in to your account
                            </h1>
                            <p class="text-xs text-gray-400">Enter your credentials to access the dashboard</p>
                        </div>
                        <form class="space-y-3 md:space-y-4" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full" placeholder="name@company.com" required>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full" required>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2 text-center">Sign in</button>
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-200"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="bg-white px-2 text-gray-500">OR</span>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-gray-900 bg-gray-50 border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2 text-center flex items-center justify-center gap-2">
                                <svg viewBox="0 0 21 20" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path>
                                        <path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path>
                                        <path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path>
                                        <path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path>
                                    </g>
                                </svg>
                                Continue with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { authService } from '~/services/auth-service'
import { z } from 'zod'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useSeoMeta({
  title: 'Executive Dashboard | Sign In',
})

// Schema validasi
const loginSchema = z.object({
  employeeId: z.string().min(1, 'Employee ID is required'),
  password: z.string().min(1, 'Password is required')
})

const employeeId = ref('')
const password = ref('')
const loading = ref(false)
const errors = ref<Record<string, string>>({})
const toast = useToast()

const handleLogin = async () => {
  if (loading.value) return
  
  errors.value = {}

  // Validasi input
  const result = loginSchema.safeParse({
    employeeId: employeeId.value,
    password: password.value
  })

  if (!result.success) {
    result.error.issues.forEach(issue => {
      errors.value[issue.path[0] as string] = issue.message
    })
    return
  }

  loading.value = true

  try {
    await authService.login(employeeId.value, password.value)
    toast.success({
      message: 'Login success! Welcome.',
    })
    navigateTo('/')
  }  finally {
    loading.value = false
  }
}
</script>