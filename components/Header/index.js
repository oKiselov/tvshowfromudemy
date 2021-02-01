import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();
    

    return (
        <div className="header">Header. Time: {Date()}

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
