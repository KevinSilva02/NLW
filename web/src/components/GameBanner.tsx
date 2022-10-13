interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}
export function GameBanner(Props:GameBannerProps) {
    return(
        <a href='' className='relative rounded-lg overflow-hidden'>
            <img src={Props.bannerUrl} />

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>{Props.title}</strong>
              <span className='text-zinc-300 text-sn block'>{Props.adsCount} anúncios(s)</span>
            </div>
          </a>
    )
}