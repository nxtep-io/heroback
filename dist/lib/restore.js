"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const Providers = require("./providers");
class HerobackRestore {
    constructor(options) {
        this.options = options;
        this.provider = HerobackRestore.initializeProvider(options);
    }
    static initializeProvider(options) {
        let provider;
        if (options.provider instanceof base_1.HerobackProvider) {
            provider = options.provider;
        }
        else {
            provider = base_1.providerFactory(options, Providers);
        }
        return provider;
    }
    run(dump, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.restore(dump, options);
        });
    }
}
exports.default = HerobackRestore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxpQ0FBMkU7QUFDM0UseUNBQXlDO0FBVXpDLE1BQXFCLGVBQWU7SUFHbEMsWUFBNEIsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUErQjtRQUMvRCxJQUFJLFFBQVEsQ0FBQztRQUViLElBQUksT0FBTyxDQUFDLFFBQVEsWUFBWSx1QkFBZ0IsRUFBRTtZQUNoRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QjthQUFNO1lBQ0wsUUFBUSxHQUFHLHNCQUFlLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVZLEdBQUcsQ0FBQyxJQUFpQixFQUFFLFVBQTBCLEVBQUU7O1lBQzlELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtDQUNGO0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSGVyb2JhY2tQcm92aWRlciwgcHJvdmlkZXJGYWN0b3J5LCBSZXN0b3JlT3B0aW9ucyB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgKiBhcyBQcm92aWRlcnMgZnJvbSAnLi9wcm92aWRlcnMnO1xuaW1wb3J0IHsgSW5wdXRTdHJlYW0gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBIZXJvYmFja1Jlc3RvcmVPcHRpb25zIHtcbiAgcHJvdmlkZXI6IHN0cmluZyB8IEhlcm9iYWNrUHJvdmlkZXI7XG4gIGJhc2VEaXI/OiBzdHJpbmc7XG4gIGd6aXA/OiBib29sZWFuO1xuICB1cmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb2JhY2tSZXN0b3JlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHByb3ZpZGVyOiBIZXJvYmFja1Byb3ZpZGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBIZXJvYmFja1Jlc3RvcmVPcHRpb25zKSB7XG4gICAgdGhpcy5wcm92aWRlciA9IEhlcm9iYWNrUmVzdG9yZS5pbml0aWFsaXplUHJvdmlkZXIob3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0aWFsaXplUHJvdmlkZXIob3B0aW9uczogSGVyb2JhY2tSZXN0b3JlT3B0aW9ucyk6IEhlcm9iYWNrUHJvdmlkZXIge1xuICAgIGxldCBwcm92aWRlcjtcblxuICAgIGlmIChvcHRpb25zLnByb3ZpZGVyIGluc3RhbmNlb2YgSGVyb2JhY2tQcm92aWRlcikge1xuICAgICAgcHJvdmlkZXIgPSBvcHRpb25zLnByb3ZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm92aWRlciA9IHByb3ZpZGVyRmFjdG9yeShvcHRpb25zLCBQcm92aWRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBydW4oZHVtcDogSW5wdXRTdHJlYW0sIG9wdGlvbnM6IFJlc3RvcmVPcHRpb25zID0ge30pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlci5yZXN0b3JlKGR1bXAsIG9wdGlvbnMpO1xuICB9XG59Il19