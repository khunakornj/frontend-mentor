import { AxisBottom, AxisLeft } from '@visx/axis';
import { GridRows } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { motion } from 'motion/react';
import { match } from 'ts-pattern';

import { getMoodData } from '@/shared/libs/moodUtils';

import { CARD_RIGHT_BAR_DATA } from './cardRight.data';
import style from './cardRight.module.css';
import type { CardRightBarValue } from './cardRight.type';

function CardRight() {
  return (
    <div className={style.container}>
      <h2>Mood and sleep trends</h2>
      <CardRightBarGroup />
    </div>
  );
}

export default CardRight;

function getX(d: CardRightBarValue) {
  return d.date;
}
function getY(d: CardRightBarValue) {
  return d.sleepValue;
}
function getYTickFormat(v: number) {
  return match<number, string>(v)
    .with(0, () => '0-2 hours')
    .with(1, () => '3-4 hours')
    .with(2, () => '5-6 hours')
    .with(3, () => '7-8 hours')
    .otherwise(() => '9+ hours');
}

function CardRightBarGroup() {
  const width = 710;
  const height = 330;

  const margin = { top: 30, bottom: 60, left: 60, right: 30 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const barData = CARD_RIGHT_BAR_DATA.slice(0, 11);

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: barData.map(getX),
    padding: 0.3,
  });

  const yScale = scaleLinear({
    range: [yMax, 0], // The Y-Flip
    round: true,
    domain: [-1, 4],
  });

  const tickValues = [0, 1, 2, 3, 4];
  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left} className={style.svgContainer}>
        <AxisLeft
          hideAxisLine
          hideTicks
          scale={yScale}
          tickValues={tickValues}
          tickFormat={(v) => getYTickFormat(v.valueOf())}
          tickLabelProps={() => ({
            className: style.labelText,
            dx: -15,
            verticalAnchor: 'middle',
          })}
        />
        <GridRows
          scale={yScale}
          tickValues={tickValues}
          width={xMax - 40}
          left={20}
          strokeWidth={1}
          className={style.grid}
        />

        {/* Month */}
        <AxisBottom
          hideAxisLine
          hideTicks
          top={yMax}
          scale={xScale}
          tickFormat={(v) => v.format('MMM')}
          tickLabelProps={() => ({ className: style.labelText, dy: 5 })}
        />

        {/* date */}
        <AxisBottom
          hideAxisLine
          hideTicks
          top={yMax}
          scale={xScale}
          tickFormat={(v) => v.date().toString().padStart(2, '0')}
          tickLabelProps={() => ({ className: style.labelNum, dy: 20 })}
        />

        {barData.map((d, i) => {
          const xValue = getX(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getY(d)) ?? 0);
          const barX = xScale(xValue);
          const barY = yMax - barHeight;

          const moodData = getMoodData(d.mood);
          const iconSize = 30;
          const iconTopPadding = 6;

          const barDuration = 0.8;
          const staggerDelay = i * 0.03;

          return (
            <Group key={`bar-group-${xValue}`}>
              <motion.rect
                x={barX}
                width={barWidth}
                height={barHeight}
                rx={22}
                className={style.bar}
                style={
                  {
                    '--dynamic-bar-color': moodData.color,
                  } as React.CSSProperties
                }
                // 1. Initial State (The "Floor")
                initial={{
                  height: 0,
                  y: yMax,
                }}
                // 2. Animate to State (The Data Value)
                animate={{
                  height: barHeight,
                  y: barY,
                }}
                // 3. Animation Settings
                transition={{
                  type: 'spring',
                  duration: barDuration,
                  delay: staggerDelay,
                }}
              />

              <motion.image
                href={moodData.iconUrl}
                x={(barX || 0) + barWidth / 2 - iconSize / 2}
                y={barY + iconTopPadding}
                width={iconSize}
                height={iconSize}
                style={{ pointerEvents: 'none' }}
                // animate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: staggerDelay + barDuration,
                }}
              />
            </Group>
          );
        })}
      </Group>
    </svg>
  );
}
