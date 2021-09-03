import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();
    

    return (
        <div className="header">Header. Time: {Date()}
        <div>
            <Link href="/ua"><a> UA </a></Link>
            <Link href="/br"><a> BR </a></Link>
            <Link href="/de"><a> DE </a></Link>
            <Link href="/be"><a> BE </a></Link>
        </div>

            <style jsx>{`{
                .header {
                    padding: 20px;
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                }
            }`}</style>
        </div>
    );
}

export default Header;
