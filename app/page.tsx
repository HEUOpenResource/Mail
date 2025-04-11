import { Header } from "@/components/layout/header"
import { auth } from "@/lib/auth"
import { Shield, Mail, Clock, Github, Globe, BarChart } from "lucide-react"
import { ActionButton } from "@/components/home/action-button"
import { FeatureCard } from "@/components/home/feature-card"

export const runtime = "edge"

export default async function Home() {
  const session = await auth()

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 h-screen">
      <div className="container mx-auto h-full px-4 lg:px-8 max-w-[1600px]">
        <Header />
        <main className="h-full pt-16">
          <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 relative">
            <div className="absolute inset-0 -z-10 bg-grid-primary/5" />
            
            <div className="w-full max-w-3xl mx-auto space-y-12 py-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    HEU Mail
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 tracking-wide">
                哈尔滨工程大学课程攻略共享计划-临时邮箱服务
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-0">
                <FeatureCard
                  icon={<Shield className="w-5 h-5" />}
                  title="隐私保护"
                  description="保护您的真实邮箱地址"
                />
                <FeatureCard
                  icon={<Mail className="w-5 h-5" />}
                  title="即时收件"
                  description="实时接收邮件通知"
                />
                <FeatureCard
                  icon={<Clock className="w-5 h-5" />}
                  title="自动过期"
                  description="到期自动失效"
                />
              </div>

              {/* 其他项目卡片 */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-8">更多项目</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
                  <a
                    href="https://github.com/HEUOpenResource/heu-icicles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-2">
                        <Github className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">HEU Icicles</h3>
                      </div>
                      <p className="text-muted-foreground">
                        哈尔滨工程大学课程攻略共享计划
                      </p>
                    </div>
                  </a>

                  <a
                    href="http://heu.us.kg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-2">
                        <Globe className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">HEU 导航</h3>
                      </div>
                      <p className="text-muted-foreground">
                        哈尔滨工程大学资源导航网站
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://analytics.heu.us.kg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-2">
                        <BarChart className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">HEU Analytics</h3>
                      </div>
                      <p className="text-muted-foreground">
                        网站访问数据分析平台
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                <ActionButton isLoggedIn={!!session} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
