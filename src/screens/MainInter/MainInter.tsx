import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { saveInquiry } from "../../lib/supabase";
import { GlobalVisaModeBannerSection } from "./sections/GlobalVisaModeBannerSection";
import { JobCategoryFilterSection } from "./sections/JobCategoryFilterSection";
import { JobListingCardsSection } from "./sections/JobListingCardsSection";
import { PrimaryAppBarSection } from "./sections/PrimaryAppBarSection";
import { PrimaryBottomNavigationSection } from "./sections/PrimaryBottomNavigationSection";
import { RecommendedJobsIntroSection } from "./sections/RecommendedJobsIntroSection";

export const MainInter = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      await saveInquiry({ name, email, message });
      setStatus("문의가 성공적으로 전송되었습니다.");
      setName("");
      setEmail("");
      setMessage("");
      setIsOpen(false);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "전송 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-w-[390px] bg-[#f8f9fa]">
      <div className="relative mx-auto flex w-full flex-col bg-[#f8f9fa] shadow-[0px_25px_50px_-12px_#00000040]">
        <header className="w-full bg-[#f8f9fa]">
          <PrimaryAppBarSection />
        </header>
        <section className="flex w-full flex-col gap-4 px-0 pb-[110px] pt-4">
          <GlobalVisaModeBannerSection />
          <JobCategoryFilterSection />
          <RecommendedJobsIntroSection />
          <JobListingCardsSection />
        </section>
        <div className="pointer-events-none fixed bottom-[110px] right-6 z-40">
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto h-auto rounded-full bg-[#ff5c00] px-5 py-3.5 text-[#521800] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] hover:bg-[#ff5c00]/90"
          >
            <span className="flex items-center gap-2">
              <img
                className="relative shrink-0"
                alt="Container"
                src="/container-3.svg"
              />
              <span className="[font-family:'Be_Vietnam_Pro',Helvetica] text-center text-sm font-semibold leading-5 tracking-[0] whitespace-nowrap">
                WRITE
              </span>
            </span>
          </Button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <Card className="w-full max-w-md rounded-2xl bg-white p-0">
              <CardHeader>
                <CardTitle>문의하기</CardTitle>
                <CardDescription>문의 내용을 남기시면 담당자가 확인 후 답변드리겠습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-1 block text-sm font-medium">이름</label>
                    <input
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">이메일</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">문의 내용</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {status ? <p className="text-sm text-gray-700">{status}</p> : null}
                  <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={isSubmitting} className="flex-1">
                      {isSubmitting ? "전송 중..." : "보내기"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                      닫기
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
        <footer className="fixed bottom-0 left-0 z-30 w-full bg-[#f8f9fa]">
          <PrimaryBottomNavigationSection />
        </footer>
      </div>
    </main>
  );
};
