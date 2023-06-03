// components/CarouselControls.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-2 ">
      <div>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          onClick={() => {
            if (props.canScrollPrev) {
              props.onPrev();
            }
          }}
          className="text-gray-100 w-10 h-10 absolute top-[calc(50%+51px)] left-10 transform -translate-y-1/2 cursor-pointer hover:text-j-dark"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => {
            if (props.canScrollNext) {
              props.onNext();
            }
          }}
          className="text-gray-100 w-10 h-10 absolute top-[calc(50%+51px)] right-10 transform -translate-y-1/2 cursor-pointer hover:text-j-dark"
        />
      </div>
    </div>
  );
};
export default CarouselControls;
