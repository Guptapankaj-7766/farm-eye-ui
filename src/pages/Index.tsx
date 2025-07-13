
import React, { useState, useEffect } from 'react';
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Wind, 
  Sprout, 
  BarChart3, 
  MapPin, 
  Wifi, 
  Battery,
  Leaf,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sensorData = [
    { 
      id: 1, 
      name: 'Temperature', 
      value: '24°C', 
      icon: Thermometer, 
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      status: 'normal',
      trend: '+2°C from yesterday'
    },
    { 
      id: 2, 
      name: 'Humidity', 
      value: '68%', 
      icon: Droplets, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      status: 'normal',
      trend: '+5% from yesterday'
    },
    { 
      id: 3, 
      name: 'Light Intensity', 
      value: '850 lux', 
      icon: Sun, 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      status: 'good',
      trend: '+120 lux from yesterday'
    },
    { 
      id: 4, 
      name: 'Wind Speed', 
      value: '12 km/h', 
      icon: Wind, 
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      status: 'normal',
      trend: '-3 km/h from yesterday'
    },
    { 
      id: 5, 
      name: 'Soil Moisture', 
      value: '42%', 
      icon: Sprout, 
      color: 'text-brown-500',
      bgColor: 'bg-amber-50',
      status: 'low',
      trend: '-8% from yesterday'
    },
    { 
      id: 6, 
      name: 'pH Level', 
      value: '6.8', 
      icon: BarChart3, 
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      status: 'optimal',
      trend: '+0.2 from yesterday'
    }
  ];

  const fieldData = [
    { id: 1, name: 'Field A - Tomatoes', status: 'healthy', area: '2.5 hectares', lastWatered: '2 hours ago' },
    { id: 2, name: 'Field B - Corn', status: 'attention', area: '3.2 hectares', lastWatered: '4 hours ago' },
    { id: 3, name: 'Field C - Lettuce', status: 'healthy', area: '1.8 hectares', lastWatered: '1 hour ago' },
    { id: 4, name: 'Field D - Carrots', status: 'healthy', area: '2.1 hectares', lastWatered: '3 hours ago' }
  ];

  const alerts = [
    { id: 1, type: 'warning', message: 'Soil moisture low in Field B', time: '5 minutes ago' },
    { id: 2, type: 'info', message: 'Irrigation system activated in Field C', time: '15 minutes ago' },
    { id: 3, type: 'success', message: 'Harvest ready in Field A', time: '1 hour ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'attention': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      case 'optimal': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">SmartFarm Monitor</h1>
                <p className="text-gray-600">Intelligent Agriculture Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Farm Location: California, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-5 w-5 text-green-500" />
                <Battery className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Time */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Real-Time Monitoring Dashboard
          </h2>
          <p className="text-gray-600">
            Last updated: {currentTime.toLocaleString()}
          </p>
        </div>

        {/* Sensor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sensorData.map((sensor) => (
            <Card key={sensor.id} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-l-4 border-green-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-full ${sensor.bgColor}`}>
                    <sensor.icon className={`h-6 w-6 ${sensor.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{sensor.name}</h3>
                    <p className="text-2xl font-bold text-gray-700">{sensor.value}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(sensor.status)}>
                  {sensor.status}
                </Badge>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {sensor.trend}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Field Status and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Field Status */}
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Sprout className="h-6 w-6 text-green-500 mr-2" />
              Field Status Overview
            </h3>
            <div className="space-y-4">
              {fieldData.map((field) => (
                <div key={field.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <h4 className="font-semibold text-gray-900">{field.name}</h4>
                    <p className="text-sm text-gray-600">{field.area}</p>
                    <p className="text-xs text-gray-500">Last watered: {field.lastWatered}</p>
                  </div>
                  <Badge className={getStatusColor(field.status)}>
                    {field.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Alerts */}
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
              Recent Alerts
            </h3>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Droplets className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Start Irrigation</span>
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <BarChart3 className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">View Analytics</span>
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Field Map</span>
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Sprout className="h-8 w-8 mx-auto mb-2" />
              <span className="text-sm font-medium">Crop Reports</span>
            </button>
          </div>
        </Card>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            © 2024 SmartFarm Monitor. Empowering sustainable agriculture through technology.
          </p>
          <div className="flex justify-center items-center mt-2 space-x-4">
            <span className="flex items-center text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              System Online
            </span>
            <span className="flex items-center text-xs">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              Sensors Active
            </span>
            <span className="flex items-center text-xs">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
              Data Syncing
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
