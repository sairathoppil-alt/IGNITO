import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts';

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })));
const EventsPage = lazy(() => import('@/pages/EventsPage').then((module) => ({ default: module.EventsPage })));
const CompetitionsPage = lazy(() => import('@/pages/CompetitionsPage').then((module) => ({ default: module.CompetitionsPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const AdminPage = lazy(() => import('@/pages/AdminPage').then((module) => ({ default: module.AdminPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
const EventDetailPage = lazy(() => import('@/pages/EventDetailPage').then((module) => ({ default: module.default })));
const CompetitionDetailPage = lazy(() => import('@/pages/CompetitionDetailPage').then((module) => ({ default: module.default })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:slug', element: <EventDetailPage /> },
      { path: 'competitions', element: <CompetitionsPage /> },
      { path: 'competitions/:slug', element: <CompetitionDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
