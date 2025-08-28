import './profile-sidebar.scss'
import Switch from "@/ui/switch/switch";
import Link from "next/link";

const ProfileSidebar = () => {
    return <div className='profile-sidebar'>
      <div className='sidebar-user-info G-align-center'>
          <div className='sidebar-user-logo G-center' >
              <img src="/sidebarUserLogo.png" alt="userLogo"/>
              <label>
                  <input type="file"/>
                  <i className='icon icon-add'></i>
              </label>

          </div>

          <div className='sidebar-user-name'>
              <h2>Marie Berger Very Long Name_XX</h2>
              <p>Profile ID 1010101010</p>
          </div>
      </div>


        <div className='s-user-status'>
             <div className='s-status-switch G-align-center'>
                 <Switch name={'Online'} variant={'green-switch'}/>
             </div>
            <p className='user-status-clue'>Online status lets clients know you’re open to meet right now</p>
        </div>

        <div className='s-profile-tools'>
            <div className='p-tools-texts'>
                <h3>My Ad Profile</h3>
                <p>Unpaid, hidden</p>
            </div>

            <div className='p-tools-items G-flex-column'>
                <div className='p-tools-item G-align-center'>
                    <i className='icon icon-edit'></i>
                    <p>Edit My Ad Profile</p>
                </div>
                <div className='p-tools-item G-align-center'>
                    <i className='icon icon-visibility'></i>
                    <p>Preview as client</p>
                </div>
            </div>


        </div>

        <nav className='s-profile-menu'>
              <ul className='G-flex-column'>
                  <li>
                      <Link href={'#'}>
                          My Crush balance  <span>100 USD</span>
                      </Link>
                  </li>
                  <li>
                      <Link href={'#'}>
                          My messages
                      </Link>
                  </li>
                  <li>
                      <Link href={'#'}>
                          My reviews
                      </Link>
                  </li>
                  <li>
                      <Link href={'#'}>
                          My promo
                      </Link>
                  </li>
                  <li>
                      <Link href={'#'}>
                          Notifications
                      </Link>
                  </li>
                  <li>
                      <Link href={'#'}>
                          My Stories
                      </Link>
                  </li>
                  <li>
                      <Link href={'#'}>
                          My Health status
                      </Link>
                  </li>
              </ul>

            <p className='s-profile-exit'>Exit</p>
        </nav>
    </div>
};

export default ProfileSidebar;