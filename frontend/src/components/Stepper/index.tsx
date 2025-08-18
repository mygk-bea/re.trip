import React, { type JSX, useEffect, useRef } from 'react';
import styled from './Stepper.module.scss';
import IconPin from '../../assets/icons/icon-pin';

interface StepperProps {
  steps: number;  
  currentStep: number;
  startIcon?: JSX.Element;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, startIcon }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const el = stepRefs.current[currentStep];
    if (!container || !el) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const elCenter =
      (elRect.left - containerRect.left) + container.scrollLeft + elRect.width / 2;

    let target = elCenter - container.clientWidth / 2;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (target < 0) target = 0;
    if (target > maxScroll) target = maxScroll;

    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [currentStep, steps]);

  return (
    <div
      ref={containerRef}
      className={`${styled.stepper} flex items-end justify-start overflow-x-auto snap-x snap-mandatory scroll-smooth`}
    >
      {Array.from({ length: steps }).map((_, index) => {
        const isActive = currentStep === index;
        const isCompleted = currentStep > index;

        return (
          <div key={index} className="flex items-center">
            <div
              ref={(el) => { stepRefs.current[index] = el; }}
              className={`${styled.step} relative flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 snap-center`}
              style={{ backgroundColor: isCompleted ? '#FF7022' : '#FFF' }}
            >
              {index === 0 && startIcon ? (
                <span className={`${isCompleted ? styled.completed : ''} ${styled.icon}`}>
                  {startIcon}
                </span>
              ) : (
                <span className={isCompleted ? styled.completed : ''}>{index}</span>
              )}

              {isActive && (
                <IconPin class={`${styled.icon} ${styled.pin} absolute -top-[70%]`} />
              )}
            </div>

            {index < steps - 1 && (
              <div className={styled.line} style={{ width: '110px' }} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;

{/* 
  Chamada
  <Stepper
  steps={7} --> total de steps contando o início
  currentStep={3}
  startIcon={<IconHome />}
/> */}