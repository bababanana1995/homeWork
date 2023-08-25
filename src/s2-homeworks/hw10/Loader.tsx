import s from './Loader.module.css'

export const Loader = () => {
    return <div className={s.preloader}>
        <div className={s.preloader__row}>
            <div className={s.preloader__item}></div>
            <div className={s.preloader__item}></div>
        </div>
    </div>
}
