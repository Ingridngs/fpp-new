import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiOutlineDashboard />
  },
  {
    title: 'Mi Perfil',
    path: '/profile',
    icon: <FaIcons.FaUser/>
  },
  {
    title: 'Evaluación',
    path: '',
    icon: <GiIcons.GiNotebook/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Competencias Organizacionales',
        path: '/ev',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Competencias Técnicas',
        path: '/evt',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reportes',
    path: '/reports',
    icon: <FaIcons.FaRegChartBar/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Equipo',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];