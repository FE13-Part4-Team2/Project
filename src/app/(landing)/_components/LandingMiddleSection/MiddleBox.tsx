import Image from 'next/image';
import clsx from 'clsx';
import {
  boxGradientStyle,
  boxStyle,
  textStyle,
  imageSize,
  getDirection,
} from '@/app/(landing)/_components/style';
import { MiddleBoxProps } from '@/app/(landing)/_components/type';

const MiddleBox = ({
  imageSrc,
  imageAlt,
  imageOnTop,
  iconSrc,
  iconAlt,
  textLines,
  textLeft = true,
  tabletReverse = false,
  mobileReverse = false,
  gradient = false,
  className,
}: MiddleBoxProps) => {
  const wrapperClass = gradient ? boxGradientStyle : '';

  return (
    <div className={wrapperClass}>
      <div className={clsx(boxStyle, className)}>
        {/* 전체 아이템 컨테이너 */}
        <div
          className={clsx(
            'flex',
            getDirection(tabletReverse, mobileReverse), // 정렬 순서
            'tablet:gap-25 laptop:gap-50 gap-10'
          )}
        >
          {/* 아이콘 & 텍스트 */}
          <div
            className={clsx(
              'flex flex-col gap-[16px]',
              'justify-center',
              textLeft ? 'items-start text-left' : 'items-end text-right'
            )}
          >
            <Image
              src={iconSrc}
              alt={`${iconAlt} 아이콘`}
              width={48}
              height={48}
            />
            <h1 className={textStyle}>
              {textLines[0]}
              <br />
              {textLines[1]}
            </h1>
          </div>

          {/* 이미지 */}
          <div
            className={clsx('flex', imageOnTop ? 'items-start' : 'items-end')}
          >
            <div className={imageSize}>
              <Image
                src={imageSrc}
                alt={`${imageAlt} 이미지`}
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBox;
