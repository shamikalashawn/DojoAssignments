class Call(object):
    def __init__(self, unique_id, caller_name, caller_phone_number, time_of_call, reason_for_call):
        self.unique_id = unique_id
        self.caller_name = caller_name
        self.caller_phone_number = caller_phone_number
        self.time_of_call = time_of_call
        self.reason_for_call = reason_for_call

    def display(self):
        print "Caller {} named {} calling from {} at {} called because {}.".format(self.unique_id, self.caller_name, self.caller_phone_number, self.time_of_call, self.reason_for_call)
        return self

class CallCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.queue_size = len(calls)
    def add(self, unique_id, caller_name, caller_phone_number, time_of_call, reason_for_call):
        new_call = Call(unique_id, caller_name, caller_phone_number, time_of_call, reason_for_call)
        self.calls.append(new_call)
        return self
    def remove(self):
        for idx in range(0, len(self.calls)-1):
            self.calls[idx] = self.calls[idx+1]
        self.calls.pop()
        return self
    def info(self):
        for call in self.calls:
            print call.caller_name
            print call.caller_phone_number
        print self.queue_size
        return self
    def find_and_remove(self, phone_number):
        for idx in range(0, len(self.calls)):
            if self.calls[idx].caller_phone_number == phone_number:
                for idx2 in range(idx, len(self.calls)-1):
                    self.calls[idx2] = self.calls[idx2+1]
                self.calls.pop()
                break
        return self
    def sort(self):
        pass

call1 = Call(1, "Suzie", '111-111-1111', '9:35pm', 'new order')
call2 = Call(2, "Sam", '222-111-1111', '10:35pm', 'return order')
call3 = Call(3, "Stan", '333-111-1111', '11:35pm', 'new order')

telecall = CallCenter([call1, call2, call3]).info().find_and_remove('111-111-1111').info()
