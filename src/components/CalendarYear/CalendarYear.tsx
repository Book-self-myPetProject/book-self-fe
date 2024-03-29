import { Fragment, useContext, useEffect } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import cn from 'classnames';
import { CalendarEnum } from '../../utils/enum/CalendarEnum';
import { useCalendarDays } from '../../utils/hooks/useCalendarDays';
import { CalendarContext } from '../../context/CalendarContext';
import { Month } from '../../utils/types/Month';

type CalendarYearProp = {
  setChosenCalendar: (input: CalendarEnum) => void;
}

export const CalendarYear: React.FC<CalendarYearProp> = ({setChosenCalendar}) => {
  const calendarData = useContext(CalendarContext);

  useEffect(() => {
    console.log(calendarData.months);
  }, [])
  

  return (
    <div>
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <time dateTime="2022">{calendarData.chosenYear}</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button
              type="button"
              // onClick={() => calendarData.setChosenYear((prev: number) => {
              //   return (
              //     prev - 1
              //   )
              // })}
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous year</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              // onClick={() => calendarData.setChosenYear((prev: number) => {
              //   return (
              //     prev + 1
              //   )
              // })}
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next year</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Year view
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            setChosenCalendar(CalendarEnum.MINI);
                          }}
                          className={cn(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm w-36',
                          )}
                        >
                          Mini view
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => {
                          setChosenCalendar(CalendarEnum.DAY);
                        }}
                        className={cn(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-36',
                        )}
                      >
                        Day view
                      </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => {
                          setChosenCalendar(CalendarEnum.WEEK);
                        }}
                        className={cn(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-36',
                        )}
                      >
                        Week view
                      </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => {
                          setChosenCalendar(CalendarEnum.MONTH);
                        }}
                        className={cn(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-36',
                        )}
                      >
                        Month view
                      </button>                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => {
                          setChosenCalendar(CalendarEnum.YEAR);
                        }}
                        className={cn(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm w-36',
                        )}
                      >
                        Year view
                      </button>                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                      className={cn(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm w-36',
                      )}
                      >
                        Go to today
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                       <button
                       onClick={() => {
                         calendarData.resetChosenDates();
                       }}
                       className={cn(
                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                         'block px-4 py-2 text-sm w-36',
                       )}
                     >
                       Go to today
                     </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                       <button
                       onClick={() => {
                         setChosenCalendar(CalendarEnum.MINI);
                       }}
                       className={cn(
                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                         'block px-4 py-2 text-sm w-36',
                       )}
                     >
                       Mini view
                     </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <button
                       onClick={() => {
                         setChosenCalendar(CalendarEnum.DAY);
                       }}
                       className={cn(
                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                         'block px-4 py-2 text-sm w-36',
                       )}
                     >
                       Day view
                     </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <button
                       onClick={() => {
                         setChosenCalendar(CalendarEnum.WEEK);
                       }}
                       className={cn(
                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                         'block px-4 py-2 text-sm w-36',
                       )}
                     >
                       Week view
                     </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <button
                       onClick={() => {
                         setChosenCalendar(CalendarEnum.MONTH);
                       }}
                       className={cn(
                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                         'block px-4 py-2 text-sm w-36',
                       )}
                     >
                       Month view
                     </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                       <button
                       onClick={() => {
                         setChosenCalendar(CalendarEnum.YEAR);
                       }}
                       className={cn(
                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                         'block px-4 py-2 text-sm w-36',
                       )}
                     >
                       Year view
                     </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="bg-white">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4 flex-1">
          {calendarData.months.map((month: Month) => (
            <section key={month.name} className="text-center">
              <h2 className="text-sm font-semibold text-gray-900">{month.name}</h2>
              <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {month.date.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    className={cn(
                      day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                      dayIdx === 0 && 'rounded-tl-lg',
                      dayIdx === 6 && 'rounded-tr-lg',
                      dayIdx === month.date.length - 7 && 'rounded-bl-lg',
                      dayIdx === month.date.length - 1 && 'rounded-br-lg',
                      'py-1.5 hover:bg-gray-100 focus:z-10'
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={cn(
                        day.isToday && 'bg-indigo-600 font-semibold text-white',
                        'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
                      )}
                    >
                    {day.date !== undefined && (day.date.split('-').pop()?.replace(/^0/, ''))}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
