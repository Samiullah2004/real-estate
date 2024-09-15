import Layout from './index'

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Desktop',
        url: '',
        allowFullscreen: true,
      },
      {
        type: 'figma',
        name: 'Mobile',
        url: '',
        allowFullscreen: true,
      },
    ],
  },
}
export default meta

export const Default = {
  args: {
    identifier: 'Navigation',
    navbar: {
      clientPortal: 'https://air-control-heating.netlify.app',
      phone: '(770) 667-5300',
      navbarLogo: {
        _type: 'customImage',
        caption: null,
        asset: {
          _ref: 'image-40ef2ff3928d1c9dbe84ab7ba9c19922c3e5e69f-856x224-png',
          _type: 'reference',
        },
      },
      mainLinks: [
        {
          subPages: 'services-pages',
          hubPage: {
            title: 'Home',
            slug: '/',
          },
          subPagesLinks: null,
          servicesLinks: [
            {
              identifier: 'Residential HVAC',
              serviceHub: {
                title: 'Home',
                slug: '/',
              },
              _nestedKey: '9a1752c543d9',
              subServicesLink: [
                {
                  title: 'Home',
                  slug: '/',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
              ],
            },
            {
              identifier: 'Commercial HVAC',
              serviceHub: {
                title: 'Home',
                slug: '/',
              },
              _nestedKey: '28e3a453e413ee9d4a74bf82a09d88f5',
              subServicesLink: [
                {
                  title: 'Home',
                  slug: '/',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
              ],
            },
            {
              identifier: 'Indoor Air Quality',
              serviceHub: {
                title: 'Home',
                slug: '/',
              },
              _nestedKey: 'a268f9f85349f3b350f301e77a4c2a41',
              subServicesLink: [
                {
                  title: 'Home',
                  slug: '/',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
                {
                  title: 'HVAC Sevices',
                  slug: 'hvac-services',
                },
              ],
            },
          ],
          _key: 'fa5545333396',
          identifier: 'HVAC Services',
        },
        {
          subPages: 'normal-pages',
          hubPage: {
            title: 'HVAC Sevices',
            slug: 'hvac-services',
          },
          subPagesLinks: [
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
          ],
          servicesLinks: null,
          _key: '2fa70cf7d1a6',
          identifier: 'About ',
        },
        {
          identifier: 'Reviews ',
          subPages: null,
          hubPage: {
            title: 'HVAC Sevices',
            slug: 'hvac-services',
          },
          subPagesLinks: null,
          servicesLinks: null,
          _key: '088cbf657454',
        },
        {
          _key: 'ef57ce0a8146',
          identifier: 'Resources',
          subPages: 'normal-pages',
          hubPage: {
            title: 'HVAC Sevices',
            slug: 'hvac-services',
          },
          subPagesLinks: [
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
          ],
          servicesLinks: null,
        },
        {
          servicesLinks: null,
          _key: '5cbc3489d118',
          identifier: 'Financing',
          subPages: null,
          hubPage: {
            title: 'HVAC Sevices',
            slug: 'hvac-services',
          },
          subPagesLinks: null,
        },
      ],
      button: {
        label: 'Contact Us',
        action: 'form',
        form: 'Contact Us',
        iconImage: null,
        withIcon: null,
        variant: 'primary',
        externalLink: false,
        slug: null,
        size: null,
        iconRight: null,
      },
    },
    footer: {
      mainLinks: [
        {
          contact: null,
          title: 'Services',
          subPages: null,
          hubPage: {
            title: 'HVAC Sevices',
            slug: 'hvac-services',
          },
          subPagesLinks: [
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
          ],
          hoursDesktop: null,
          hoursMobile: null,
        },
        {
          contact: null,
          title: 'Company',
          subPages: null,
          hubPage: {
            title: 'Home',
            slug: '/',
          },
          subPagesLinks: [
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
            {
              title: 'HVAC Sevices',
              slug: 'hvac-services',
            },
          ],
          hoursDesktop: null,
          hoursMobile: null,
        },
        {
          subPagesLinks: null,
          hoursDesktop: [
            {
              style: 'normal',
              _key: 'e111b3f7e81e',
              markDefs: [],
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Emergency Service 24/7',
                  _key: '3499bb2b19210',
                },
              ],
              _type: 'block',
            },
            {
              _type: 'block',
              style: 'normal',
              _key: 'b52f99282de1',
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  marks: [],
                  text: 'Mon ',
                  _key: 'ebc64cf93fcb0',
                  _type: 'span',
                },
                {
                  marks: ['em'],
                  text: '8 AM - 5 PM',
                  _key: '85d335d7f55e',
                  _type: 'span',
                },
              ],
              level: 1,
            },
            {
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Tue ',
                  _key: '2876e746d220',
                },
                {
                  _type: 'span',
                  marks: ['em'],
                  text: '8 AM - 5 PM',
                  _key: 'ab15f042da05',
                },
              ],
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: '76674c22fae6',
            },
            {
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: 'b31615190ecd',
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Wed ',
                  _key: 'eee6aa379b86',
                },
                {
                  _type: 'span',
                  marks: ['em'],
                  text: '8 AM - 5 PM',
                  _key: 'f07b3ee444a3',
                },
              ],
            },
            {
              markDefs: [],
              children: [
                {
                  _key: 'f9939bf95283',
                  _type: 'span',
                  marks: [],
                  text: 'Thu ',
                },
                {
                  _type: 'span',
                  marks: ['em'],
                  text: '8 AM - 5 PM',
                  _key: '87c884e464bf',
                },
              ],
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: '04efa0b6e4d2',
              listItem: 'bullet',
            },
            {
              style: 'normal',
              _key: '3bfeb6bddbeb',
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Fri ',
                  _key: '8a92686a1463',
                },
                {
                  _type: 'span',
                  marks: ['em'],
                  text: '8 AM - 5 PM ',
                  _key: '5587439fd049',
                },
              ],
              level: 1,
              _type: 'block',
            },
            {
              style: 'normal',
              _key: '7bbd62621858',
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Sat ',
                  _key: '0628b585121b0',
                },
                {
                  _type: 'span',
                  marks: ['em'],
                  text: 'Closed',
                  _key: 'a93d4e977a2d',
                },
              ],
              level: 1,
              _type: 'block',
            },
            {
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Sun ',
                  _key: '48ed32dd57a8',
                },
                {
                  marks: ['em'],
                  text: 'Closed',
                  _key: '9c48dee25b54',
                  _type: 'span',
                },
              ],
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: 'ac1e0cb68e40',
              listItem: 'bullet',
              markDefs: [],
            },
          ],
          hoursMobile: [
            {
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  _type: 'span',
                  marks: [],
                  text: 'Monday - Friday ',
                  _key: '30793abf3af00',
                },
                {
                  marks: ['em'],
                  text: '8 AM - 5 PM',
                  _key: 'f3b5f0ccff2c',
                  _type: 'span',
                },
              ],
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: '667bb61350ac',
            },
            {
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: '69c58e9e2ced',
              listItem: 'bullet',
              markDefs: [],
              children: [
                {
                  text: 'Saturday - Sunday ',
                  _key: '53667a82fc0f0',
                  _type: 'span',
                  marks: [],
                },
                {
                  _type: 'span',
                  marks: ['em'],
                  text: 'Closed',
                  _key: 'cd8c836ac3a0',
                },
              ],
            },
          ],
          contact: null,
          title: 'Hours',
          subPages: 'hours',
          hubPage: null,
        },
        {
          contact: [
            {
              listItem: 'bullet',
              markDefs: [
                {
                  _type: 'link',
                  href: 'https://www.google.com/maps/place/Air+Control+Heating+and+Air/@34.0512719,-84.3267692,17z/data=!4m5!3m4!1s0x88f574ef3b6b4d01:0xbfa81d906183c119!8m2!3d34.0512675!4d-84.3245805?shorturl=1',
                  _key: '6d1830dacc63',
                },
              ],
              children: [
                {
                  _key: '202352311de00',
                  _type: 'span',
                  marks: ['6d1830dacc63'],
                  text: '5020 Old Ellis Pointe,',
                },
              ],
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: '08e9ec92cb48',
            },
            {
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: 'd87fd781c649',
              listItem: 'bullet',
              markDefs: [
                {
                  _type: 'link',
                  href: 'https://www.google.com/maps/place/Air+Control+Heating+and+Air/@34.0512719,-84.3267692,17z/data=!4m5!3m4!1s0x88f574ef3b6b4d01:0xbfa81d906183c119!8m2!3d34.0512675!4d-84.3245805?shorturl=1',
                  _key: '6d1830dacc63',
                },
              ],
              children: [
                {
                  text: 'Suite 300 Roswell,',
                  _key: '88f8ec61c44a',
                  _type: 'span',
                  marks: ['6d1830dacc63'],
                },
              ],
            },
            {
              level: 1,
              _type: 'block',
              style: 'normal',
              _key: 'f6a61944cb70',
              listItem: 'bullet',
              markDefs: [
                {
                  _key: '6d1830dacc63',
                  _type: 'link',
                  href: 'https://www.google.com/maps/place/Air+Control+Heating+and+Air/@34.0512719,-84.3267692,17z/data=!4m5!3m4!1s0x88f574ef3b6b4d01:0xbfa81d906183c119!8m2!3d34.0512675!4d-84.3245805?shorturl=1',
                },
              ],
              children: [
                {
                  _type: 'span',
                  marks: ['6d1830dacc63'],
                  text: 'GA 30076',
                  _key: '707da80c3c34',
                },
              ],
            },
            {
              children: [
                {
                  _type: 'span',
                  marks: ['dcd560b1f26c'],
                  text: '770-667-5300',
                  _key: '45e34530dc7c0',
                },
              ],
              _type: 'block',
              style: 'normal',
              _key: 'f85e36270b67',
              markDefs: [
                {
                  _type: 'link',
                  href: 'tel:7706675300',
                  _key: 'dcd560b1f26c',
                },
              ],
            },
          ],
          title: 'Contact',
          subPages: 'contact',
          hubPage: null,
          subPagesLinks: null,
          hoursDesktop: null,
          hoursMobile: null,
        },
      ],
      copyRight: '©2024 Air Control Heating & Air',
      privacyPolicyPage: {
        title: 'HVAC Sevices',
        slug: 'hvac-services',
      },
      socialLinks: [
        {
          footerLogoNormal: {
            _type: 'customImage',
            caption: null,
            asset: {
              _ref: 'image-fae82c557131470e22219ea891985278348354bc-72x80-png',
              _type: 'reference',
            },
          },
          footerLogoHover: {
            _type: 'customImage',
            caption: null,
            asset: {
              _ref: 'image-fb8987a6af1096856ea517b41be488245968a21f-72x80-png',
              _type: 'reference',
            },
          },
          socialLink:
            'https://www.facebook.com/Air-Control-Heating-Air-100157265692408',
        },
      ],
      footerLogo: {
        _type: 'customImage',
        caption: null,
        asset: {
          _ref: 'image-ac51bd0fbcf0feb26016f0084f1a98b2e5bd25fe-864x224-png',
          _type: 'reference',
        },
      },
      license: 'GA License #CR110513',
      ratingLogo: {
        _type: 'customImage',
        caption: null,
        asset: {
          _ref: 'image-a7e6bd96d886047a6ae6e070db72406188c0be14-325x160-png',
          _type: 'reference',
        },
      },
    },
  },
}
