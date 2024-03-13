import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return <div className={cx('wrapper')}>
    <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a64c8df89faff26eff768c16e729b386.jpeg?lk3s=a5d48078&x-expires=1710424800&x-signature=0HTIF1Epa%2FZkjmPJg6c8G0OrCLA%3D' alt='Hoa'></img>
    <div className={cx('info')}>
        <h4 className={cx('name')}>
            <span>Nguyen Van A </span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </h4>
        <span className={cx('username')}>@nguyenvana</span>
    </div>
  </div>;
}

export default AccountItem;
