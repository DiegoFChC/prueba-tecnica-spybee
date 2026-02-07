import styles from './FigureInfo.module.css'

type FigureInfoType = {
  value: number | string
  intensity: number
}

export function FigureInfo({ value, intensity }: FigureInfoType) {
  return (
    <div
      className={styles.FigureInfo}
      style={{ ['--color-hex' as string]: `rgba(254, 197, 15, ${intensity / 10})` }}
    >
      {value}
    </div>
  )
}
