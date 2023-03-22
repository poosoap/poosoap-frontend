//
//  RCTCalendarModule.m
//  PoosoapApp
//
//  Created by 손지호 on 2023/03/22.
//
  
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named CalendarModuleFoo
RCT_EXPORT_MODULE(CalendarModuleFoo);

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
