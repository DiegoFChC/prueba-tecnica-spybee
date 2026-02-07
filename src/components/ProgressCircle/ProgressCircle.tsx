import styles from './ProgressCircle.module.css'

type ProgressCircleType = {
  total: number
  subTotal: number
}

export function ProgressCircle({ total, subTotal }: ProgressCircleType) {

  const percentage = total > 0 ? ( subTotal / total ) * 100 : 0

  return (
    <div className={styles.ProgressCircle}>
      <span
        className={styles.progress}
        style={{
          background: `conic-gradient(#F76668 ${
            percentage * 3.6
          }deg, rgba(255, 255, 255, .1) 0deg)`,
        }}
      ></span>
      <p>{subTotal}</p>
    </div>
  )
}
