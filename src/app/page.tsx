import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <header className="relative w-full bg-gray-900 py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0">
        <img
          src="/NewGR200.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
          style={{
            objectFit: "cover",
            maxHeight: "100%"
          }}
        />
      </div>
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl  tracking-tight text-gray-50 sm:text-5xl lg:text-6xl">김재홍(JaeHong Kim)</h1>
          <p className="mt-4 text-lg text-gray-400">
            게임 개발 및 기획자 | 인디게임을 좋아하고 1인개발을 지향
          </p>
          <p className="mt-12 text-xl text-gray-200">
            안녕하세요! 저의 포트폴리오에 오신 것을 환영합니다...
          </p>
        </div>
      </div>
    </header>
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-3xl  tracking-tight text-gray-50">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg p-6 shadow-md bg-gray-800">
            <div className="flex justify-center">
              <a href="https://store.steampowered.com/app/1160020/AshenForest/">
                <img
                  alt="AshenForest"
                  className="mb-4 rounded-lg"
                  height="200"
                  src="/project-header001.jpg"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </a>
            </div>
            <h3 className="text-2xl  text-gray-200">잿빛숲(AshenForest)</h3>
            <h4 className="-m-2 mb-3 text-xl font-normal text-gray-500 text-right">2019</h4>
            <p className="text-gray-300">
              잿빛숲(AshenForest)은 보스 러쉬 중심의 로그라이트 액션 게임입니다. 플레이어는 전염병을 유발시키고 있는 잿빛숲을 정화시키기 위해, 숲에 있는 온갖 마물들과 맞서 싸워야 합니다. 해당 작품은 1인 개발하다가 BGM 작곡가 한분과 같이 개발한 게임이며 처음으로 스팀에 출시한 게임입니다.
            </p>
          </div>
          <div className="rounded-lg p-6 shadow-md bg-gray-800">
            <div className="flex justify-center">
              <a href="https://youtu.be/f7sTaOp76_w?si=ELAW5Dqk4MEGQblH">
                <img
                  alt="WaterBorne"
                  className="mb-4 rounded-lg"
                  height="200"
                  src="/project-header002.jpg"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </a>
            </div>
            <h3 className="text-2xl  text-gray-200">워터본(WaterBorne)</h3>
            <h4 className="-m-2 mb-3 text-xl font-normal text-gray-500 text-right">2022</h4>
            <p className="text-gray-300">
              심해의 괴물들을 테마로 한 횡스크롤 액션 게임입니다. 한 인터넷 방송인을 위해 만든 팬게임이며 BGM 작곡가와 협업한 작품입니다.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow-md bg-gray-800">
            <div className="flex justify-center">
              <a href="https://github.com/GrandpaTalkWithTop-ProjectTeam/GrandpaProject">
              <img
                alt="GTWT"
                className="mb-4 rounded-lg"
                height="200"
                src="/project-header003.gif"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </a>
            </div>
            <h3 className="text-2xl  text-gray-200">Grandpa Talk with Top</h3>
            <h4 className="-m-2 mb-3 text-xl font-normal text-gray-500 text-right">2024</h4>
            <p className="text-gray-300">
              그랜파 톡 윗 탑은 1인칭 어드벤처 로프액션 장르로 미지의 공간을 탐험하며 자신만의 길을 개척해나가는 게임입니다. 해당 작품은 팀 작업물이며, 제가 프로그래머로 참여한 작품입니다.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow-md bg-gray-800">
            <div className="flex justify-center">
              <a href="https://youtu.be/Q-wNL15Hn_I?si=1Kv1pUWA3JQ3n-P9">
                <img
                  alt="Hamelina"
                  className="mb-4 rounded-lg"
                  height="200"
                  src="/project-header004.png"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </a>
            </div>
            <h3 className="text-2xl  text-gray-200">하멜리나(Hamelina)</h3>
            <h4 className="-m-2 mb-3 text-xl font-normal text-gray-500 text-right">2023</h4>
            <p className="text-gray-300">
              잔혹동화를 컨셉으로한 소울류 RPG 게임입니다. 이 게임은 제 시험작으로 현재 게임 개발에 대한 고민을 엿볼 수 있습니다.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow-md bg-gray-800">
            <div className="flex justify-center">
              <a href="https://youtu.be/lt3B4qHiRUU?si=Sd1rrkga0x0N-IaA">
                <img
                  alt="NeckSouls"
                  className="mb-4 rounded-lg"
                  height="200"
                  src="/project-header005.png"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </a>
            </div>
            <h3 className="text-2xl  text-gray-200">넥크소울</h3>
            <h4 className="-m-2 mb-3 text-xl font-normal text-gray-500 text-right">2021</h4>
            <p className="text-gray-300">
              방송인을 위해 제작된 5분 남짓의 짧은 팬게임입니다. 프롬 소프트웨어의 대표작 '다크소울'을 패러디 하였으며, 해당 방송의 밈을 적절히 섞어 시청자들에게 웃음을 자아냈습니다.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow-md bg-gray-800">
            <div className="flex justify-center">
              <a href="https://youtu.be/lt3B4qHiRUU?si=Sd1rrkga0x0N-IaA">
                <img
                  alt="Wanderer"
                  className="mb-4 rounded-lg"
                  height="200"
                  src="/project-header006.png"
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </a>
            </div>
            <h3 className="text-2xl  text-gray-200">원더러(Wanderer)</h3>
            <h4 className="-m-2 mb-3 text-xl font-normal text-gray-500 text-right">2017</h4>
            <p className="text-gray-300">
              본격적으로 게임개발에 뛰어들기 전에 완성했던 액션 RPG 게임 'Wanderer'입니다. 투박한 레트로 스타일의 도트 그래픽과 다양한 무기 스킬로 적들을 쓸어버리는 액션요소가 특징입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-gray-100 py-12 md:py-20 lg:py-24 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-3xl  tracking-tight text-gray-50">About</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl text-gray-50">사용하는 툴들</h3>
            <p className="text-gray-400">
              제가 게임을 개발할때 사용하는 툴들을 정리해보았습니다.
            </p>
            <ul className="mt-4 text-gray-400">
              <li>GameMaker Studio 2</li>
              <li>Unity</li>
              <li>Aseprite</li>
              <li>Spine</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl text-gray-50">수상 및 이력</h3>
            <p className="text-gray-400">
              아래는 게임 공모전, 시연 등의 이력들입니다.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-400">
              <li>Global Game Challenge 2019 Awards Gold Prize </li>
              <li>Busan Indie Connect Festival 2019 Official Selection -Rookie Division-</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-3xl  tracking-tight text-gray-50">Contact</h2>
        <div className="mx-auto max-w-2xl">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-50" htmlFor="name">
                Name
              </label>
              <Input id="name" required type="text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-50" htmlFor="email">
                Email
              </label>
              <Input id="email" required type="email" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-50" htmlFor="message">
                Message
              </label>
              <Textarea id="message" required rows={5} />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  </>
  );
}
